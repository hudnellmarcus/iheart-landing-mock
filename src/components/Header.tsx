import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full bg-iheart-red text-white px-4 py-4">
      <div className="flex items-center justify-between w-full py-2">
        <div className="flex items-center">
          <Image
            src="/iHeartRadio_Logo_iHR Horizontal Black 2.png"
            alt="logo"
            className="ml-6 mr-6"
            width={100}
            height={100}
            style={{ width: 'auto', height: 'auto' }}
          />
          <div className="flex px-4 space-x-5">
            <Link href="/">Offers</Link>
            <Link href="/">Benefits</Link>
            <Link href="/">Perks</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Redeemed Rewards</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-4">
            <Image
              src="/ri_question-fill.png"
              alt="question"
              className=""
              width={25}
              height={25}
            />
            <Image
              src="/ri_notification-2-fill.png"
              alt="notification"
              className=""
              width={25}
              height={25}
            />
          </div>
          <div className="flex items-center space-x-2 px-4">
            <div className="rounded-full bg-white py-2 px-2">
              <h2 className="text-black">JW</h2>  
            </div>
              <h2 className="text-sm px-2">Jillian W.</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
