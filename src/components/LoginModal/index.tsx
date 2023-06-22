import { ReactNode } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { LoginButton, ModalContent, Overlay } from './styles'
import { BsGithub } from 'react-icons/bs'
import * as Dialog from '@radix-ui/react-dialog'
import { signIn } from 'next-auth/react'

interface LoginModalProps {
  children: ReactNode
}

export default function LoginModal({ children }: LoginModalProps) {
  async function handleSignIn(provider: 'google' | 'gihub') {
    await signIn(provider)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <ModalContent>
          <h1>Sig In to leave your review</h1>
          <LoginButton onClick={() => handleSignIn('google')}>
            <FcGoogle /> Login with Google
          </LoginButton>
          <LoginButton onClick={() => handleSignIn('gihub')}>
            <BsGithub /> Login with GitHub
          </LoginButton>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
