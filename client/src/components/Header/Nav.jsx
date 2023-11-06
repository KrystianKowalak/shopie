import { useState } from "react";
import { Link } from "react-router-dom";
import SHLogo from "../../assets/images/SNACK-HAPPY.gif"
import { Navbar, Modal, Tabs } from "flowbite-react";
import Cart from "../Cart";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../../utils/auth";
import { UserCircleIcon, MoonIcon, HomeIcon } from "@heroicons/react/24/outline"



function Nav() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>		
			<Navbar fluid rounded className=" p-1 border-gray-300">
				<Navbar.Brand as={Link} href="https://flowbite-react.com">
            		<img src={SHLogo} className="h-12 sm:h-12" alt="Happy Snack" />
        		</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link as={Link} to="#">
                		<HomeIcon className="h-6 w-6 cursor-pointer text-black hover:scale-110 ease-in duration-300" />
            		</Navbar.Link>
            		<Navbar.Link as={Link} to="#">
                		<MoonIcon className="h-6 w-6 cursor-pointer text-black hover:scale-110 ease-in duration-300" />
            		</Navbar.Link>
					{Auth.loggedIn() ? (
						<>
							<Navbar.Link onClick={Auth.logout}>
                				<UserCircleIcon className="h-6 w-6 cursor-pointer  text-black hover:scale-110 ease-in duration-300" />
            				</Navbar.Link>
							<Cart />
						</>
					) : (
						<Navbar.Link onClick={() => setShowModal(true)}>Login/Sign Up</Navbar.Link>

					)}
				</Navbar.Collapse>
			</Navbar>
			<Modal dismissible show={showModal} onClose={() => setShowModal(false)}>
				<Modal.Header>
				<Tabs.Group aria-label="Default tabs" style="default">
						<Tabs.Item active title="Login">
							<LoginForm/>
						</Tabs.Item>
						<Tabs.Item title="Signup">
							<SignUpForm/>
						</Tabs.Item>
					</Tabs.Group>
				</Modal.Header>
				<Modal.Body>
				</Modal.Body>
			</Modal>
		</>
	);
}
export default Nav;