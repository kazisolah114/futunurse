import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/" // Redirects to the homepage url if not authenticated
    }
})

export const config = {
    matcher: ["/dashboard/:path*", "/api/:path*"]
}