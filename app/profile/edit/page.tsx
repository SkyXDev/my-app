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
				>
					<div className="mb-8">
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
							Profile Picture
						</label>
						<div className="flex items-center space-x-6">
							<div className="relative">
								<div className="w-24 h-24 rounded-full overflow-hidden">
									<img
									src={/*formData.avatar_url || */"/default-avatar.png"}
									alt="Profile"
									className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</form>

			</div>
		</div>
	</div>
	)
}