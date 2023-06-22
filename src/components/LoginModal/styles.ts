import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const ModalContent = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  background: '$gray700',
  minWidth: '300px',
  padding: '56px 72px',
  borderRadius: '12px',

  display: 'flex',
  flexDirection: 'column',

  gap: '$4',

  alignItems: 'center',

  h1: {
    marginBottom: '$10',
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$bold',
  },
})

export const LoginButton = styled('button', {
  background: '$gray600',

  border: 'none',
  padding: '$5 $6',
  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',
  lineHeight: '$base',

  svg: {
    fontSize: '32px',
  },

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
