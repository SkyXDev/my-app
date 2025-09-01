import { useRouter } from "next/navigation";
import { UserProfile } from "@/app/profile/page";
import {
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { getStreamUserToken } from "@/lib/actions/stream";
import { StreamChat } from "stream-chat";
interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: Date;
  user_id: string;
}


export default function StreamChatInterface({
  otherUser,
  ref,
}: {
  otherUser: UserProfile;
  ref: RefObject<{ handleVideoCall: () => void } | null>;
}) {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null);
	const [currentUserId, setCurrentUserId] = useState<string>("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState<string>("");
	const [isTyping, setIsTyping] = useState<boolean>(false);

	const router = useRouter()
	useEffect(() => {
		async function initializeChat() {
			try{
				setError(null)

				const { token, userId, userName, userImage } = await getStreamUserToken()
				setCurrentUserId(userId!)

				const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY!)

				await chatClient.connectUser({
					id: userId!, 
					name: userName, 
					image: userImage
				}, token)
			}catch(error){
				router.push("/chat");
			}finally{
				setLoading(false);
			}
		}
		if(otherUser){
			initializeChat()
		}
	}, [otherUser])
	return <div></div>
}