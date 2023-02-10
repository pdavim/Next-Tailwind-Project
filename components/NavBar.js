import Link from "next/link";
import "../styles/Navbar.module.css";
const Navbar = () => {
  // function to handle the opening and closing of the dropdown menu
  const handleDropdown = () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  };

  // function to close the dropdown menu when the user clicks outside of it
  const handleClickOutside = (event) => {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (
        openDropdown.style.display === "block" &&
        !event.target.matches(".dropbtn")
      ) {
        openDropdown.style.display = "none";
      }
    }
  };

  // add event listener to the window object to handle clicks outside of the dropdown menu
  if (typeof window !== "undefined") {
    window.addEventListener("click", handleClickOutside);
  }

  return (
    <nav>
      <ul className="navList">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="dropdown">
          <button className="dropbtn" onClick={handleDropdown}>
            Dropdown
          </button>
          <div className="dropdown-content">
            <Link href="/page1">Page 1</Link>
            <Link href="/page2">Page 2</Link>
            <Link href="/page3">Page 3</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
