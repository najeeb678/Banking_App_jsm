import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = async () => {
  const loggedIn = { firstname: "Adrian" ,lastname:"JSM" ,email:"adrian@gmail.com"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstname || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>
        
      </div>
      <RightSidebar user={loggedIn } transactions={[]} banks={[{currentBalance:2314.50},{currentBalance:1257.50}]} />
    </section>
  );
};

export default Home;
