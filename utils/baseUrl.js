const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://dec4front2.herokuapp.com/"
		: "http://localhost:3000";

export default baseUrl;