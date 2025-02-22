import { useState, useContext } from 'react';
import { StreamChat, type Channel } from 'stream-chat';
import { AuthContext } from '@/context/AuthProvider';

function useChatClient() {
  const { user } = useContext(AuthContext) ?? { user: null };
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);

  const connectChat = async () => {
    try {
      const userEmail = user?.email;
      if (!userEmail) {
        console.error('No user session available for chat connection.');
        return;
      }
      const response = await fetch('/api/customerSupport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });
      if (!response.ok) {
        console.error('Failed to fetch customer support data');
        return;
      }
      const data = await response.json();
      const { token, channelId, userId, VITE_PUBLIC_STREAM_KEY } = data;
      const streamClient = StreamChat.getInstance(VITE_PUBLIC_STREAM_KEY);
      await streamClient.connectUser(
        { id: userId, name: userEmail },
        token
      );
      const streamChannel = streamClient.channel('messaging', channelId);
      await streamChannel.watch();
      setClient(streamClient);
      setChannel(streamChannel);
    } catch (error) {
      console.error('Error initializing chat:', error);
    }
  };

  const disconnectChat = async () => {
    if (client) {
      await client.disconnectUser();
      setClient(null);
      setChannel(null);
    }
  };

  return { client, channel, connectChat, disconnectChat };
}

export default useChatClient;