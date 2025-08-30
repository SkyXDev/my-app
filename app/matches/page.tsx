"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getPotentialMatches } from "@/lib/actions/matches";
import { UserProfile } from "../profile/page";
import MatchCard from "../components/MatchCard";


export default function matchesPage(){
	const [potentialMatches, setPotentialMatches] = useState<UserProfile[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	const router = useRouter();

	useEffect(() => {
		async function loadUsers() {
		try {
			const potentialMatchesData = await getPotentialMatches();
			setPotentialMatches(potentialMatchesData);
			console.log("loaded")
		} catch (error) {
			console.error(error);
			console.log("not loaded")
		} finally {
			setLoading(false);
		}
		}

		loadUsers();
	}, []);


	if (loading) {
		return (
		<div className="h-full bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
			<div className="text-center">
			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
			<p className="mt-4 text-gray-600 dark:text-gray-400">
				Finding your matches...
			</p>
			</div>
		</div>
		);
	}

	const currentPotentialMatch = potentialMatches[currentIndex]
	console.log(potentialMatches)
	return (
	<div className="h-full overflow-y-auto bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
		<div className="container mx-auto px-4 py-8">
			<header className="mb-8">
				<div className="flex items-center justify-between mb-4">
					<button
					onClick={() => router.back()}
					className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors duration-200"
					title="Go back"
					>
					<svg
						className="w-6 h-6 text-gray-700 dark:text-gray-300"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
						/>
					</svg>
					</button>
					<div className="flex-1" />
				</div>

				<div className="text-center">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
					Discover Matches
					</h1>
					<p className="text-gray-600 dark:text-gray-400">
					{currentIndex + 1} of {potentialMatches.length} profiles
					</p>
				</div>
			</header>
			<div className="max-w-md mx-auto">
				<MatchCard user={currentPotentialMatch} />
				{/*<div className="mt-8">
					<MatchButtons onLike={handleLike} onPass={handlePass} />
				</div>*/}
			</div>

		</div>
	</div>)
      
}