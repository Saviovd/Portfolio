import styled from 'styled-components';

export const LanguageStyles = styled.div<{ currentLang: string }>`
   .dropdown {
      position: relative;
      display: inline-block;
   }

   .dropdown-btn {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      svg {
         font-size: 2.5rem;
         fill: rgba(var(--light-green));
         font-weight: 100;
      }
      .globe {
         transform: translateX(3px);
      }
      .arrow {
         font-size: 1.5rem;
         bottom: 0;
      }
   }

   .dropdown-content {
      overflow: hidden;
      border-radius: 1rem;
      display: none;
      position: absolute;
      background-color: rgba(var(--light-green), 0.1);
      border: 1px solid rgba(var(--light-green));
      right: 0;
      top: calc(100% + 5px);
      min-width: 100px;
      z-index: 1;

      @media (max-width: 1024px) {
         top: calc(100% + 20px);
      }
   }

   .dropdown-content li {
      backdrop-filter: blur(1rem);
      color: black;
      padding: 8px 12px;
      text-align: left;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
      color: rgba(var(--light));
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;

      &:nth-child(1) {
         border-radius: 1rem 1rem 0 0;
      }
      &:nth-last-child(1) {
         border-radius: 0 0 1rem 1rem;
      }
      &:hover {
         background-color: rgba(var(--light), 0.4);
      }
   }

   .currentLang {
      font-weight: bold;
      background-color: rgba(var(--light-green), 0.6);
   }
`;
