import { A } from "@solidjs/router";
import Header from "./Header";
import SearchBox from "./SearchBox";

function Banner() {
  return (
    <div class="banner">
      <div class="bg-black bg-opacity-90 w-full h-full">
        <Header />
        <div class="w-11/12 lg:w-10/12 mx-auto mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-4">
          <div class="lg:col-span-3">
            <h1 class="text-2xl sm:text-4xl lg:text-5xl text-white font-semibold">
              Find Vetted & Verified Property Dealers & House Agents in Jos.
            </h1>
            <div class="my-4 flex -space-x-2">
              <img
                src="../src/assets/agent1.jpg"
                class="w-8 rounded-full border border-white"
              />
              <img
                src="../src/assets/agent2.jpg"
                class="w-8 rounded-full border border-white"
              />
              <img
                src="../src/assets/agent3.jpg"
                class="w-8 rounded-full border border-white"
              />
              <img
                src="../src/assets/agent4.jpg"
                class="w-8 rounded-full border border-white"
              />
              <img
                src="../src/assets/agent5.jpg"
                class="w-8 rounded-full border border-white"
              />
            </div>
            <div class="bg-white lg:w-4/5 p-2 sm:p-3 rounded">
              <h2 class="text-xs lg:leading-none lg:text-sm">
                Avoid scammers. Get contacts of property dealers & house agents
                you can trust for FREE:
              </h2>
              <SearchBox/>
              <div class="text-xs mt-1 lg:space-x-1">
                <span class="block lg:inline">Popular searches:</span>
                <span class="space-x-1">
                  <A
                    href="#"
                    class="text-orange-600 hover:underline decoration-black"
                  >
                    Farin Gada
                  </A>
                  ,
                  <A
                    href="#"
                    class="text-orange-600 hover:underline decoration-black"
                  >
                    Risau
                  </A>
                  ,
                  <A
                    href="#"
                    class="text-orange-600 hover:underline decoration-black"
                  >
                    Anguwan Rukuba
                  </A>
                  ,
                  <A
                    href="#"
                    class="text-orange-600 hover:underline decoration-black"
                  >
                    Rayfield
                  </A>
                </span>
              </div>
            </div>
          </div>
          <div>x</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
