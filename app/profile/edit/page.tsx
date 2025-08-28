"use client";



export default function editProfilePage(){

	async function handleFormSubmit(){
		
	}

	return (
	<div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
		<div className="container mx-auto px-4 py-8">
			<header className="text-center mb-8">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
					Edit Profile
				</h1>
				<p className="text-gray-600 dark:text-gray-400">
					Update your profile information
				</p>
			</header>
			<div className="max-w-2xl mx-auto">
				<form
					className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
					onSubmit={handleFormSubmit}
				></form>

			</div>
		</div>
	</div>
	)
}