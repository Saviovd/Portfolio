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
         fill: rgba(var(--light-blue));
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
      background-color: rgba(var(--light-green), 0.06);
      border: 1px solid rgba(var(--light-blue));
      right: 0;
      top: calc(100%);
      min-width: 100px;
      z-index: 1;
   }

   .dropdown-content li {
      color: black;
      padding: 8px 12px;
      text-align: left;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
      color: rgba(var(--light));

      &:nth-child(1) {
         border-radius: 1rem 1rem 0 0;
      }
      &:nth-last-child(1) {
         border-radius: 0 0 1rem 1rem;
      }
      &:hover {
         background-color: rgba(var(--light-blue));
      }
   }

   .currentLang {
      font-weight: bold;
      background-color: rgba(var(--light-blue), 0.5);
   }
`;
