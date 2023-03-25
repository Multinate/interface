import Image from 'next/image'
import {
  NavigationContainer,
  NavigationIcon,
  NavigationOptionIcon,
  NavigationOptions,
  NavigationSection,
  NavigationOption,
} from './style'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import MultiNateIcon from '@/assets/images/MultiNateIcon.svg'
import Routes from '@/utils/Routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IRoute } from '@/utils/interfaces'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

interface IPropsSmartLink {
  route: IRoute
  children: ReactElement
}

const SmartLink: FC<IPropsSmartLink> = ({ route, children }) => {
  if (route.href.includes('https://')) {
    return (
      <a href={route.href} target="_blank">
        {children}
      </a>
    )
  } else {
    return (
      <Link key={route.title} href={route.href}>
        {children}
      </Link>
    )
  }
}

const Navigation = () => {
  const router = useRouter()
  const { address } = useAccount()
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(!!address)
  }, [address])

  const renderSmartLink = (route: IRoute) => (
    <SmartLink key={route.title} route={route}>
      <NavigationOption selected={router.pathname.includes(route.href)}>
        <NavigationOptionIcon>
          <Image src={route.icon} alt={route.title} fill />
        </NavigationOptionIcon>
        <p>{route.title}</p>
      </NavigationOption>
    </SmartLink>
  )

  return (
    <NavigationContainer>
      <NavigationSection>
        <Link href={'/'}>
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
    </NavigationContainer>
  )
}

export default Navigation
