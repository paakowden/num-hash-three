import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className=""
      >
        <SunIcon
          className="h-[1rem] w-[1rem] scale-100 rotate-0 
        transition-all dark:rotate-90 dark:scale-0"
        />
        <MoonIcon
          className="absolute h-[1rem] w-[1rem] scale-0 rotate-90 
        transition-all dark:rotate-0 dark:scale-100"
        />
      </Button>
    </div>
  );
};

export default ThemeToggler;