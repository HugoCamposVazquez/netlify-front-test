const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://back4de.herokuapp.com"
		: "http://localhost:3000";

export default baseUrl;