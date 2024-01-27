
import logo from "../logo.png";
import { A } from "@solidjs/router";

function Header() {
  return (
    <header class="w-11/12 lg:w-10/12 mx-auto py-4 flex justify-between">
      <div class="flex space-x-3">
        <A href="/">
          <img
            src={logo}
            class="w-10 h-10 rounded-full p-1 bg-white"
            alt="logo"
          />
        </A>
        <p class="text-white pt-2">
          <A href="#" class="border-b border-orange-600">
            Contact
          </A>
        </p>
      </div>
      <A href="#" class="bg-white p-2 rounded hover:opacity-60">
        Are you an Agent?{" "}
        <span class="border-b border-orange-600">Click here</span>
      </A>
    </header>
  );
}

export default Header;
