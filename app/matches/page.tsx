"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getPotentialMatches } from "@/lib/actions/matches";
import { UserProfile } from "../profile/page";


export default function matchesPage(){
	const [potentialMatches, setPotentialMatches] = useState<UserProfile[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	const router = useRouter();

	useEffect(() => {
		async function loadUsers() {
			try{
				const potentialMatchesData = await getPotentialMatches()
				setPotentialMatches(potentialMatchesData)
			}catch(error){
				console.log(error)
			}finally{
				setLoading(false)
			}
		}
	}, [])


	return <div></div>;
}