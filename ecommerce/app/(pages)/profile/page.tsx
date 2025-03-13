import { getUserById } from "@/app/lib/users";
import { verifySession } from "@/app/lib/session";

export default async function Home() {
    const session = await verifySession();
    const userId = session.userId ?? "";
    const user = await getUserById(userId);
    if (!user) {
        return <p>User not found</p>
    }
    return (
        <section>
            <h1 className="text-4xl text-center">Profile</h1>
            <div className="p-4 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-4 m-auto ">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </section>
    )

}