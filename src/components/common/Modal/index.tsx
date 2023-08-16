import React, { useRef } from 'react'
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'
import { MODAL } from '@constants'
import ConfirmDialog from '../ConfirmDialog'

interface ModalProps {
  id: string | undefined
  isOpen: boolean
  closeModal: () => void
  modalType: MODAL.ADD | MODAL.EDIT | MODAL.DELETE
}

const Modal: React.FC<ModalProps> = ({ id, isOpen, closeModal, modalType }) => {
  const btnRef = useRef(null)

  return (
    <ChakraModal
      id={id}
      finalFocusRef={btnRef}
      isOpen={isOpen}
      onClose={closeModal}
      scrollBehavior="inside"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent backgroundColor="background">
        <ModalHeader>
          <ModalCloseButton
            borderRadius="full"
            border="2px solid"
            borderColor="transparent"
            color="primary"
            _hover={{
              borderColor: 'primary',
            }}
          />
        </ModalHeader>
        <ModalBody>
          {modalType === MODAL.ADD ? (
            <ConfirmDialog id={'add'} onDelete={() => console.log(id)} />
          ) : (
            'bcd'
          )}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default React.memo(Modal)
