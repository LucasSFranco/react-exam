import { cloneElement, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import styled from 'styled-components'

import { Times } from '@/assets/icons'

function Modal({ content, children }) {
  const modalRef = useRef()

  const [isVisible, setVisibility] = useState(false)

  const open = () => {
    setVisibility(true)
  }

  const close = () => {
    setVisibility(false)
  }

  return (
    <>
      {
        cloneElement(children, { onClick: open })
      }

      {
        createPortal(
          isVisible && (
            <Self
              className="modal"
              ref={modalRef}
              onClick={({ target }) => target === modalRef.current && close()}
            >
              <div className="modal__content">
                <button className="modal__closer" onClick={close}>
                  <Times />
                </button>
                {content}
              </div>
            </Self>
          ),
          document.querySelector('body')
        )
      }
    </>
  )
}

const Self = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, .25);

  z-index: 999;

  .modal__content {
    position: relative;

    .modal__closer {
      position: absolute;
      top: .75rem;
      right: .75rem;

      color: var(--text-secondary);
      cursor: pointer;
      font-size: 1.25rem;

      transition: 50ms color;

      z-index: 99;

      &:hover {
        color: var(--text-primary);
      }
    }
  }
`

export default Modal
