import Image from "next/image";
import { NavigationContainer, NavigationIcon, NavigationOptionIcon, NavigationOptions, NavigationSection, NavigationOption } from "./style"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import MultiNateIcon from '@/assets/images/MultiNateIcon.svg';
import Routes from "@/utils/Routes";
import Link from "next/link";
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  return (
    <NavigationContainer>
      <NavigationSection>
        <NavigationIcon>
          <Image src={MultiNateIcon} alt="MultiNate Icon" fill/>
        </NavigationIcon>
        <NavigationOptions>
          { Routes.map((route) => 
            <Link key={route.title} href={route.href}>
              <NavigationOption selected={router.pathname.includes(route.href)}>
                <NavigationOptionIcon>
                  <Image src={route.icon} alt={route.title} fill/>
                </NavigationOptionIcon>
                <p>
                  {route.title}
                </p>
              </NavigationOption>
            </Link>
          )}
        </NavigationOptions>
      </NavigationSection>
      <NavigationSection>
        <ConnectButton/>
      </NavigationSection>
    </NavigationContainer>
  )
}

export default Navigation