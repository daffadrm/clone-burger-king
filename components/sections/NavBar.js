import Link from 'next/link';
import { useContext } from 'react';

import { ToggleOverlayContext } from '@/contexts/overlay-context';
import OffCanvasAnimation from '@/components/animations/OffCanvasAnimation';
import HamburgerMenuButton from '@/components/buttons/HamburgerMenuButton';
import Overlay from '@/components/sections/Overlay';
import ShoppingCart from '@/components/widgets/ShoppingCart';
import NavLinkHome from '@/components/widgets/NavLinkHome';
import NavLinkLogin from '@/components/widgets/NavLinkLogin';
import NavLinkMenus from '@/components/widgets/NavLinkMenus';
import NavLinkPromotions from '@/components/widgets/NavLinkPromotions';
import NavLinkLargeOrder from '@/components/widgets/NavLinkLargeOrder';

export default function NavBar() {
	const { isShown, target, toggleOverlay } = useContext(ToggleOverlayContext);
	const onToggleOverlay = () => {
		toggleOverlay('nav');
	};

	return (
		<>
			{/* Navigation */}
			<header
				className={`sticky top-0 z-50 lg:static ${
					target === 'nav' && !isShown ? 'shadow-lg' : ''
				}`}
			>
				{/* Navigation @ mobile */}
				<nav className="h-13 bg-branding-dark lg:hidden flex items-center justify-between">
					{/* Hamburger Button */}
					<HamburgerMenuButton
						isOverlayShown={isShown}
						onToggleOverlay={onToggleOverlay}
					/>

					{/* Branding Logo */}
					<Link href="/">
						<a>
							<img
								alt="BKDelivery's"
								className="w-10 h-10"
								src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
							></img>
						</a>
					</Link>

					{/* Shopping Cart */}
					<ShoppingCart />
				</nav>

				{/* Navigation @ desktop */}
				<nav className="bg-branding-dark lg:block hidden h-20">
					<div className="center-container relative flex justify-between h-full">
						{/* Branding logo overflow container */}
						<div className="-left-24 top-2 absolute w-24 h-24 z-20">
							{/* Branding Logo */}
							<Link href="/">
								<a>
									<img
										alt="BKDelivery's"
										className="w-full h-full"
										src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
									></img>
								</a>
							</Link>
						</div>
						{/* Shopping cart overflow container */}
						<div className="-right-16 absolute w-20 h-full">
							<ShoppingCart />
						</div>

						{/* Actual navigation items (flex) */}
						{/* Left items */}
						<div className="flex items-center space-x-8">
							{/* Delivery Order */}
							<NavLinkMenus />

							{/* Get Fresh Promotions */}
							<NavLinkPromotions />
							<NavLinkLargeOrder />
						</div>

						{/* Right items */}
						<div className="flex items-center space-x-8">
							{/* Login */}
							<NavLinkLogin />
						</div>
					</div>
				</nav>
			</header>

			{/* Overlay */}
			<OffCanvasAnimation show={isShown && target === 'nav'}>
				<Overlay>
					<div className="flex flex-col w-full h-full space-y-8">
						{/* Home */}
						<NavLinkHome />

						{/* Delivery Order */}
						<NavLinkMenus />

						{/* Get Fresh Promotions */}
						<NavLinkPromotions />
						<NavLinkLargeOrder />

						<hr className="border-gray" />

						{/* Login */}
						<NavLinkLogin />
					</div>
				</Overlay>
			</OffCanvasAnimation>
		</>
	);
}
