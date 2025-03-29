import { memo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Loader2 } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  isCurrentUser?: boolean;
  isLoading?: boolean;
}

const ChatMessage = memo(
  ({ message, isCurrentUser, isLoading }: ChatMessageProps) => {
    const { content, createdAt, sender } = message;

    return (
      <div
        className={cn(
          "flex w-full gap-3 p-4",
          isCurrentUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={sender.avatar} alt={sender.name} />
          <AvatarFallback>{sender.name[0]}</AvatarFallback>
        </Avatar>
        <div
          className={cn(
            "flex max-w-[80%] flex-col gap-2 rounded-lg px-4 py-2",
            isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"
          )}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{sender.name}</span>
            <span className="text-xs opacity-70">
              {format(new Date(createdAt), "HH:mm", { locale: vi })}
            </span>
          </div>
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Đang gửi...</span>
            </div>
          ) : (
            <p className="text-sm">{content}</p>
          )}
        </div>
      </div>
    );
  }
);

ChatMessage.displayName = "ChatMessage";

export default ChatMessage;
