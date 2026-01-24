'use client';

import { ChatBox } from '@/components/chatBox/ChatBox';
import { useState } from 'react';

const ConversationsPage = () => {
  const [selectedConversationId, setSelectedConversationId] = useState('1');

  return (
    <div className="w-full">
      <ChatBox
        selectedConversationId={selectedConversationId}
        onConversationSelect={setSelectedConversationId}
        otherUserName="Creative Director"
        currentUserName="You"
      />
    </div>
  );
}

export default ConversationsPage;
