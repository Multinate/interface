import Image from 'next/image'
import {
  NavigationContainer,
  NavigationIcon,
  NavigationOptionIcon,
  NavigationOptions,
  NavigationSection,
  NavigationOption,
  NavigationMobileBurgerContainer,
  NavigationMobileBurger,
  NavigationMobileContainer,
} from './style'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import MultiNateIcon from '@/assets/images/MultiNateIcon.svg'
import Routes from '@/utils/Routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IRoute } from '@/utils/interfaces'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import useWindowDimensions from '@/hooks/useWindowDImensions'

interface IPropsSmartLink {
  route: IRoute
  children: ReactElement
  handleClick: () => void
}

const SmartLink: FC<IPropsSmartLink> = ({ route, children, handleClick }) => {
  if (route.href.includes('https://')) {
    return (
      <a href={route.href} target="_blank" onClick={handleClick}>
        {children}
      </a>
    )
  } else {
    return (
      <Link key={route.title} href={route.href} onClick={handleClick}>
        {children}
      </Link>
    )
  }
}

const Navigation = () => {
  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions()
  const router = useRouter()
  const { address } = useAccount()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(!!address)
  }, [address])

  const renderSmartLink = (route: IRoute) => (
    <SmartLink key={route.title} route={route} handleClick={() => setShowNav(false)}>
      <NavigationOption selected={router.pathname.includes(route.href)}>
        <NavigationOptionIcon>
          <Image src={route.icon} alt={route.title} fill />
        </NavigationOptionIcon>
        <p>{route.title}</p>
      </NavigationOption>
    </SmartLink>
  )

  const renderNavigationContent = () => (
    <>
      <NavigationSection>
        <Link href={'/'} onClick={() => setShowNav(false)}>
          <NavigationIcon>
            <Image src={MultiNateIcon} alt="MultiNate Icon" fill />
          </NavigationIcon>
        </Link>
        <NavigationOptions>
          {Routes.map((route) => {
            if (!route.reqWalletConnected) {
              return renderSmartLink(route)
            } else {
              if (isActive) {
                return renderSmartLink(route)
              }
            }
          })}
        </NavigationOptions>
      </NavigationSection>
      <NavigationSection>
        <ConnectButton chainStatus="icon" accountStatus="address" showBalance={false} />
      </NavigationSection>
    </>
  )

  if (windowDimensions.width < LARGE_SCREEN_SIZE) {
    return (
      <>
        <NavigationMobileBurgerContainer onClick={() => setShowNav(!showNav)}>
          <NavigationMobileBurger open={showNav}>
            <i></i>
            <i></i>
            <i></i>
          </NavigationMobileBurger>
        </NavigationMobileBurgerContainer>
        <NavigationMobileContainer open={showNav}>{renderNavigationContent()}</NavigationMobileContainer>
      </>
    )
  }
  return <NavigationContainer>{renderNavigationContent()}</NavigationContainer>
}

export default Navigation
