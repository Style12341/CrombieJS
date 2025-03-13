import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser();
    if (!user) return
    return (
        <section>
            <h1 className="text-4xl text-center">Profile</h1>
            <div className="p-4 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-4 m-auto ">
                    {user.imageUrl && <Image src={user.imageUrl} alt={user.fullName ?? ""} width={50} height={50} className="rounded-full w-24 h-24 mx-auto" />}
                    <p>Name: {user.fullName}</p>
                    <p>Email: {user.emailAddresses[0].emailAddress}</p>
                </div>
            </div>
        </section>
    )

}