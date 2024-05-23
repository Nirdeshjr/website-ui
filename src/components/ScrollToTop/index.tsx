import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDismissed, setIsModalDismissed] = useState(false);

  // Custom CSS for blinking animation
  const styles = `
    @layer utilities {
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      .blink {
        @apply animate-[blink_1s_infinite];
      }
    }
  `;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const dismissModal = () => {
    setIsModalOpen(false);
    setIsModalDismissed(true);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        if (!isModalDismissed) {
          setIsModalOpen(true);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isModalDismissed]);

  return (
    <>
      <style>{styles}</style>
      <div className="fixed bottom-8 right-8 z-[99]">
        {isVisible && (
          <>
            <div
              onClick={scrollToTop}
              aria-label="scroll to top"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp mb-4"
            >
              <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                onClick={toggleModal}
                src="/images/logo/vacancy.jpeg" // Placeholder image URL; replace with the actual vacancy photo URL
                alt="Vacancy"
                className="rounded-full w-12 h-12 object-cover blink cursor-pointer" 
              />
              {isModalOpen && (
                <div className="absolute right-16 z-[100] flex items-center justify-center bg-black bg-opacity-50" style={{bottom: '-26.7px'}}>
                  <div className="bg-white rounded-lg p-6 lg:w-96 w-56 relative">
                    <button
                      onClick={dismissModal}
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    >
                      &times;
                    </button>
                    <h2 className="text-xl font-semibold mb-4 dark:text-black">See The Opening</h2>
                    <p className="text-gray-700">Want to see the detail <a href="/vacancy" className="text-blue-500 hover:underline">Click Me..!</a></p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}




