class Github {
	constructor() {}

	async getUser(user) {
		const profileResponse = await fetch(`http://node.uttarakhandtraveller.com/places/${user}`);

		const profile = await profileResponse.json();

		return {
			profile
		};
	}
}
