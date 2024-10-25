import { auth, signIn, signOut } from "../../auth";


export async function SignIn() {
  const session = await auth();

  return (
    <>
        {session && session.user ? (
          <div className="w-screen flex justify-around md:justify-end gap-2 p-4">
            <p className="leading-loose">Hi {session.user.name}!</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="z-10 bg-transparent w-36 leading-loose px-4 rounded-full border-2 border-white transition duration-300 hover:bg-white hover:text-black">Sign Out</button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button type="submit" className="bg-transparent w-36 leading-loose px-4 rounded-full border-2 border-white transition duration-300 hover:bg-white hover:text-black">Log in</button>
          </form>
        )}
    </>
  );
}

