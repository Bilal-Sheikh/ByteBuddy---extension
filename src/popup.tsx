import { useChat } from "ai/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";

import "~style.css";

function IndexPopup() {
	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat({
			api: "http://localhost:3000/api/chat"
		});

	const disabled = isLoading || input.length === 0;

	return (
		<div className="h-[450px] w-[500px]">
			<div className="overflow-y-auto m-5 p-4 w-[450px] h-[400px] border-2 border-gray-500 rounded-md">
				{messages.length === 0 ? (
					<div>
						<p className="text-center text-lg">
							Welcome to the chat! Type a message and hit enter to
							send. You can also use the Send button. Have fun!
						</p>
					</div>
				) : (
					<div>
						{messages.map((m) => (
							<div key={m.id}>
								{m.role === "user" ? (
									<div className="bg-zinc-800 rounded-md my-1 p-1">
										YOU: {m.content}
									</div>
								) : (
									<div className="bg-zinc-800 rounded-md my-1 p-1">
										🤖: {m.content}
									</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>

			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center mb-2 w-full fixed bottom-0 border-gray-300 text-black gap-2"
			>
				<input
					value={input}
					onChange={handleInputChange}
					placeholder="Say something..."
					autoFocus
					className="w-[430px] pl-4 h-7 border-2 border-gray-500 bg-zinc-800 text-white shadow-sm shadow-gray-500 rounded-md focus:outline-none"
				/>
				<button
					type="submit"
					className={`flex h-8 w-8 items-center justify-center rounded-md transition-all ${
						disabled
							? "cursor-not-allowed bg-zinc-800"
							: "bg-green-500 hover:bg-green-600"
					}`}
					disabled={disabled}
				>
					{isLoading ? (
						<AiOutlineLoading3Quarters className="animate-spin fill-white" />
					) : (
						<VscSend />
					)}
				</button>
			</form>
		</div>
	);
}

export default IndexPopup;
