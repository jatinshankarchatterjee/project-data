import { SignIn } from "@clerk/nextjs";
import Header from "@/app/Components/Header";

export default function Page() {
  return (
    <div className="flex justify-evenly align-middle mt-2">
      <Header />
      <div className="flex justify-center align-middle mt-2">
        <SignIn
          appearance={{
            variables: {
              colorBackground: "#FFB140",
              colorText: "#03071E",
            },
            elements: {
              footerActionText: {
                fontSize: "16px",
                color: "#03071E",
              },
              footerAction: {
                display: "none",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
