import { SignUp } from "@clerk/nextjs";
import Header from "@/app/Components/Header";
export default function Page() {
  return (
    <div className="flex justify-evenly align-middle ">
      <Header />
      <div className="flex mt-2 justify-center align-middle">
        <SignUp
          appearance={{
            variables: {
              colorBackground: "#FFB140",
              colorText: "#03071E",
            },
            elements: { footerAction: { display: "none" } },
          }}
        />
      </div>
    </div>
  );
}
