import AboutLayout from "@/components/about/about-layout"


export default function Home() {
  return (
    <div className=" h-dvh w-full overflow-hidden bg-[#ebe9e3] dark:bg-zinc-900">
      {/* Main content area with sidebar and children */}
      <div className="flex md:flex-row flex-col h-full">
        <div className="w-full lg:w-[40%]">
      <AboutLayout />
      </div>
        <div className="w-full lg:w-[50%] h-full">
          <header className="sticky top-0 z-50 md:mt-2 mx-2">
           Header
          </header>
          {/* Children content on the right */}
          <main className="h-full w-full flex-1 overflow-auto  rounded-md md:mr-2 md:my-2">
            main content
          </main>
        </div>
      </div>
    </div>
   
  );
}
