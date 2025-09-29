import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/" // Redirects to the given url if not authenticated
    }
})

export const config = {
    matcher: ["/dashboard/:path*"]
}