import React from 'react';
import { View } from 'react-native';
import styles from './Navigation.styled';
import NavItem from './NavItem/NavItem';
import Svg, { Mask, Path, Rect } from 'react-native-svg';

const Navigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavItem
        icon={
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.5952 8.54155L12.5952 3.22643C12.2416 2.95794 11.7584 2.95794 11.4048 3.22642L4.40477 8.54155C4.15016 8.73487 4 9.04045 4 9.36524V19.9499C4 20.516 4.44772 20.9749 5 20.9749H6.625C7.17728 20.9749 7.625 20.516 7.625 19.9499V16.3052C7.625 15.123 8.08899 13.9918 8.91081 13.1598C9.73221 12.3282 10.8437 11.8633 12 11.8633C13.1563 11.8633 14.2678 12.3282 15.0892 13.1598C15.911 13.9918 16.375 15.123 16.375 16.3052V19.9499C16.375 20.516 16.8227 20.9749 17.375 20.9749H19C19.5523 20.9749 20 20.516 20 19.9499V9.36524C20 9.04045 19.8498 8.73487 19.5952 8.54155ZM20.1905 7.71785C20.6997 8.1045 21 8.71566 21 9.36524V19.9499C21 21.0821 20.1046 22 19 22H17.375C16.2704 22 15.375 21.0821 15.375 19.9499V16.3052C15.375 15.399 15.0194 14.5299 14.3865 13.8891C13.7536 13.2484 12.8951 12.8884 12 12.8884C11.1049 12.8884 10.2464 13.2484 9.61351 13.8891C8.98058 14.5299 8.625 15.399 8.625 16.3052V19.9499C8.625 21.0821 7.72957 22 6.625 22H5C3.89543 22 3 21.0821 3 19.9499V9.36524C3 8.71566 3.30033 8.1045 3.80954 7.71785L10.8095 2.40273C11.5167 1.86576 12.4833 1.86576 13.1905 2.40273L20.1905 7.71785Z"
              fill="#333333"
            />
          </Svg>
        }
        text="Home"
      />
      <NavItem
        icon={
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Mask
              id="path-1-outside-1_115_4140"
              maskUnits="userSpaceOnUse"
              x="1"
              y="2.4165"
              width="22"
              height="19"
              fill="black"
            >
              <Rect fill="white" x="1" y="2.4165" width="22" height="19" />
              <Path d="M5.55602 11.8956V15.0327C5.55602 16.2765 6.56793 17.2884 7.81181 17.2884H16.188C17.4318 17.2884 18.4437 16.2765 18.4437 15.0327V11.8956C18.4437 10.6518 17.4318 9.63994 16.188 9.63994H7.81181C6.56793 9.63994 5.55602 10.6518 5.55602 11.8956ZM17.9631 11.8956V15.0327C17.9631 16.0115 17.1668 16.8078 16.188 16.8078H7.81181C6.83299 16.8078 6.03663 16.0115 6.03663 15.0327V11.8956C6.03663 10.9168 6.83299 10.1205 7.81181 10.1205H16.188C17.1668 10.1205 17.9631 10.9168 17.9631 11.8956Z" />
              <Path d="M8.11649 13.4679C8.11649 12.9467 8.54042 12.5227 9.06163 12.5227C9.58284 12.5227 10.0068 12.9467 10.0068 13.4679H10.4874C10.4874 12.6818 9.84779 12.0421 9.06163 12.0421C8.27548 12.0421 7.63588 12.6818 7.63588 13.4679H8.11649Z" />
              <Path d="M14.9383 12.5227C15.4594 12.5227 15.8833 12.9467 15.8833 13.4679H16.364C16.364 12.6818 15.7245 12.0421 14.9383 12.0421C14.1522 12.0421 13.5126 12.6818 13.5126 13.4679H13.9932C13.9932 12.9467 14.4171 12.5227 14.9383 12.5227Z" />
              <Path d="M21.6033 4.01951C21.3125 3.67383 20.9047 3.46192 20.4547 3.4232C20.0051 3.38354 19.5667 3.5227 19.2209 3.81346C18.8752 4.10399 18.6634 4.51185 18.6246 4.96172C18.6088 5.14418 18.6236 5.32424 18.6645 5.4974L16.6488 7.19218C15.2836 6.53959 13.6952 6.16348 12 6.16348C10.3048 6.16348 8.71636 6.53959 7.35115 7.19218L5.33549 5.49746C5.37636 5.32429 5.39121 5.14419 5.37541 4.96172C5.33657 4.51185 5.12478 4.10399 4.77911 3.81346C4.43343 3.5227 3.99483 3.38331 3.54531 3.4232C3.09532 3.46192 2.68746 3.67383 2.39682 4.01951C2.10618 4.36518 1.96749 4.80331 2.00644 5.25318C2.0454 5.70305 2.25719 6.11091 2.60286 6.40167C2.91028 6.66028 3.29104 6.79851 3.68811 6.79851C3.73739 6.79851 3.78691 6.79639 3.83666 6.79193C4.01904 6.77624 4.19387 6.73073 4.35744 6.66072L5.95961 8.00794C4.02635 9.37916 2.80128 11.3938 2.80128 13.6378C2.80128 15.6469 3.76731 17.5318 5.52138 18.9452L5.58744 18.9985H7.34326V20.5834H16.6567V18.9985H18.4124L18.4785 18.9452C20.2327 17.5318 21.1987 15.6469 21.1987 13.6378C21.1987 11.3938 19.9737 9.37916 18.0404 8.00794L19.6426 6.66072C19.8061 6.73073 19.981 6.77624 20.1633 6.79193C20.2131 6.79639 20.2626 6.79851 20.3119 6.79851C20.709 6.79851 21.0897 6.66028 21.3971 6.40167C21.7428 6.11091 21.9546 5.70305 21.9936 5.25318C22.0325 4.80331 21.8938 4.36518 21.6033 4.01951ZM3.79524 6.3132C3.47362 6.34042 3.15963 6.24186 2.91216 6.0337C2.6647 5.82578 2.5131 5.53385 2.48529 5.21165C2.45737 4.88967 2.55663 4.57615 2.76467 4.3288C3.00368 4.04438 3.34654 3.89794 3.69186 3.89794C3.9669 3.89794 4.24335 3.99088 4.46981 4.18143C4.71715 4.38935 4.86875 4.68128 4.89656 5.00326C4.92449 5.32523 4.82522 5.63898 4.61718 5.88633C4.40914 6.13368 4.11721 6.28527 3.79524 6.3132ZM4.78657 6.3935C4.85709 6.33318 4.92422 6.26807 4.98515 6.19563C5.04602 6.1232 5.09863 6.04591 5.14593 5.9661L6.88549 7.42868C6.71082 7.52398 6.5415 7.6251 6.37556 7.72964L4.78657 6.3935ZM16.1761 20.1028H7.82387V18.9985H16.1761V20.1028ZM20.7181 13.6378C20.7181 15.4737 19.8396 17.2037 18.2423 18.5178H5.75758C4.16039 17.2037 3.28189 15.4737 3.28189 13.6378C3.28189 9.78144 7.19284 6.64409 12 6.64409C16.8072 6.64409 20.7181 9.78144 20.7181 13.6378ZM17.6244 7.72964C17.4585 7.6251 17.2892 7.52398 17.1145 7.42868L18.854 5.96608C18.9013 6.04589 18.9539 6.12319 19.0149 6.19563C19.0758 6.26807 19.1429 6.33318 19.2134 6.3935L17.6244 7.72964ZM21.0878 6.0337C20.8405 6.24186 20.5278 6.34113 20.2048 6.3132C19.8828 6.28527 19.5909 6.13368 19.3828 5.88633C19.1748 5.63898 19.0755 5.32523 19.1033 5.00326C19.1312 4.68128 19.2827 4.38935 19.5302 4.18143C19.7567 3.99088 20.0331 3.89794 20.3081 3.89794C20.6533 3.89794 20.9963 4.04462 21.2354 4.3288C21.4434 4.57615 21.5426 4.88967 21.5147 5.21165C21.4869 5.53385 21.3353 5.82578 21.0878 6.0337Z" />
              <Path d="M9.26451 14.8293C9.99165 15.2282 10.9631 15.4479 12 15.4479C13.0369 15.4479 14.0084 15.2282 14.7353 14.8293L14.5042 14.4078C13.8564 14.7633 12.9436 14.9672 12 14.9672C11.0564 14.9672 10.1436 14.7633 9.49567 14.4078L9.26451 14.8293Z" />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7181 13.6378C20.7181 15.4737 19.8396 17.2037 18.2423 18.5178H5.75758C4.16039 17.2037 3.28189 15.4737 3.28189 13.6378C3.28189 9.78144 7.19284 6.64409 12 6.64409C16.8072 6.64409 20.7181 9.78144 20.7181 13.6378ZM5.55602 15.0327V11.8956C5.55602 10.6518 6.56793 9.63994 7.81181 9.63994H16.188C17.4318 9.63994 18.4437 10.6518 18.4437 11.8956V15.0327C18.4437 16.2765 17.4318 17.2884 16.188 17.2884H7.81181C6.56793 17.2884 5.55602 16.2765 5.55602 15.0327Z"
              />
              <Path d="M3.79524 6.3132C3.47362 6.34042 3.15963 6.24186 2.91216 6.0337C2.6647 5.82578 2.5131 5.53385 2.48529 5.21165C2.45737 4.88967 2.55663 4.57615 2.76467 4.3288C3.00368 4.04438 3.34654 3.89794 3.69186 3.89794C3.9669 3.89794 4.24335 3.99088 4.46981 4.18143C4.71715 4.38935 4.86875 4.68128 4.89656 5.00326C4.92449 5.32523 4.82522 5.63898 4.61718 5.88633C4.40914 6.13368 4.11721 6.28527 3.79524 6.3132Z" />
              <Path d="M21.0878 6.0337C20.8405 6.24186 20.5278 6.34113 20.2048 6.3132C19.8828 6.28527 19.5909 6.13368 19.3828 5.88633C19.1748 5.63898 19.0755 5.32523 19.1033 5.00326C19.1312 4.68128 19.2827 4.38935 19.5302 4.18143C19.7567 3.99088 20.0331 3.89794 20.3081 3.89794C20.6533 3.89794 20.9963 4.04462 21.2354 4.3288C21.4434 4.57615 21.5426 4.88967 21.5147 5.21165C21.4869 5.53385 21.3353 5.82578 21.0878 6.0337Z" />
            </Mask>
            <Path
              d="M5.55602 11.8956V15.0327C5.55602 16.2765 6.56793 17.2884 7.81181 17.2884H16.188C17.4318 17.2884 18.4437 16.2765 18.4437 15.0327V11.8956C18.4437 10.6518 17.4318 9.63994 16.188 9.63994H7.81181C6.56793 9.63994 5.55602 10.6518 5.55602 11.8956ZM17.9631 11.8956V15.0327C17.9631 16.0115 17.1668 16.8078 16.188 16.8078H7.81181C6.83299 16.8078 6.03663 16.0115 6.03663 15.0327V11.8956C6.03663 10.9168 6.83299 10.1205 7.81181 10.1205H16.188C17.1668 10.1205 17.9631 10.9168 17.9631 11.8956Z"
              fill="#333333"
            />
            <Path
              d="M8.11649 13.4679C8.11649 12.9467 8.54042 12.5227 9.06163 12.5227C9.58284 12.5227 10.0068 12.9467 10.0068 13.4679H10.4874C10.4874 12.6818 9.84779 12.0421 9.06163 12.0421C8.27548 12.0421 7.63588 12.6818 7.63588 13.4679H8.11649Z"
              fill="#333333"
            />
            <Path
              d="M14.9383 12.5227C15.4594 12.5227 15.8833 12.9467 15.8833 13.4679H16.364C16.364 12.6818 15.7245 12.0421 14.9383 12.0421C14.1522 12.0421 13.5126 12.6818 13.5126 13.4679H13.9932C13.9932 12.9467 14.4171 12.5227 14.9383 12.5227Z"
              fill="#333333"
            />
            <Path
              d="M21.6033 4.01951C21.3125 3.67383 20.9047 3.46192 20.4547 3.4232C20.0051 3.38354 19.5667 3.5227 19.2209 3.81346C18.8752 4.10399 18.6634 4.51185 18.6246 4.96172C18.6088 5.14418 18.6236 5.32424 18.6645 5.4974L16.6488 7.19218C15.2836 6.53959 13.6952 6.16348 12 6.16348C10.3048 6.16348 8.71636 6.53959 7.35115 7.19218L5.33549 5.49746C5.37636 5.32429 5.39121 5.14419 5.37541 4.96172C5.33657 4.51185 5.12478 4.10399 4.77911 3.81346C4.43343 3.5227 3.99483 3.38331 3.54531 3.4232C3.09532 3.46192 2.68746 3.67383 2.39682 4.01951C2.10618 4.36518 1.96749 4.80331 2.00644 5.25318C2.0454 5.70305 2.25719 6.11091 2.60286 6.40167C2.91028 6.66028 3.29104 6.79851 3.68811 6.79851C3.73739 6.79851 3.78691 6.79639 3.83666 6.79193C4.01904 6.77624 4.19387 6.73073 4.35744 6.66072L5.95961 8.00794C4.02635 9.37916 2.80128 11.3938 2.80128 13.6378C2.80128 15.6469 3.76731 17.5318 5.52138 18.9452L5.58744 18.9985H7.34326V20.5834H16.6567V18.9985H18.4124L18.4785 18.9452C20.2327 17.5318 21.1987 15.6469 21.1987 13.6378C21.1987 11.3938 19.9737 9.37916 18.0404 8.00794L19.6426 6.66072C19.8061 6.73073 19.981 6.77624 20.1633 6.79193C20.2131 6.79639 20.2626 6.79851 20.3119 6.79851C20.709 6.79851 21.0897 6.66028 21.3971 6.40167C21.7428 6.11091 21.9546 5.70305 21.9936 5.25318C22.0325 4.80331 21.8938 4.36518 21.6033 4.01951ZM3.79524 6.3132C3.47362 6.34042 3.15963 6.24186 2.91216 6.0337C2.6647 5.82578 2.5131 5.53385 2.48529 5.21165C2.45737 4.88967 2.55663 4.57615 2.76467 4.3288C3.00368 4.04438 3.34654 3.89794 3.69186 3.89794C3.9669 3.89794 4.24335 3.99088 4.46981 4.18143C4.71715 4.38935 4.86875 4.68128 4.89656 5.00326C4.92449 5.32523 4.82522 5.63898 4.61718 5.88633C4.40914 6.13368 4.11721 6.28527 3.79524 6.3132ZM4.78657 6.3935C4.85709 6.33318 4.92422 6.26807 4.98515 6.19563C5.04602 6.1232 5.09863 6.04591 5.14593 5.9661L6.88549 7.42868C6.71082 7.52398 6.5415 7.6251 6.37556 7.72964L4.78657 6.3935ZM16.1761 20.1028H7.82387V18.9985H16.1761V20.1028ZM20.7181 13.6378C20.7181 15.4737 19.8396 17.2037 18.2423 18.5178H5.75758C4.16039 17.2037 3.28189 15.4737 3.28189 13.6378C3.28189 9.78144 7.19284 6.64409 12 6.64409C16.8072 6.64409 20.7181 9.78144 20.7181 13.6378ZM17.6244 7.72964C17.4585 7.6251 17.2892 7.52398 17.1145 7.42868L18.854 5.96608C18.9013 6.04589 18.9539 6.12319 19.0149 6.19563C19.0758 6.26807 19.1429 6.33318 19.2134 6.3935L17.6244 7.72964ZM21.0878 6.0337C20.8405 6.24186 20.5278 6.34113 20.2048 6.3132C19.8828 6.28527 19.5909 6.13368 19.3828 5.88633C19.1748 5.63898 19.0755 5.32523 19.1033 5.00326C19.1312 4.68128 19.2827 4.38935 19.5302 4.18143C19.7567 3.99088 20.0331 3.89794 20.3081 3.89794C20.6533 3.89794 20.9963 4.04462 21.2354 4.3288C21.4434 4.57615 21.5426 4.88967 21.5147 5.21165C21.4869 5.53385 21.3353 5.82578 21.0878 6.0337Z"
              fill="#333333"
            />
            <Path
              d="M9.26451 14.8293C9.99165 15.2282 10.9631 15.4479 12 15.4479C13.0369 15.4479 14.0084 15.2282 14.7353 14.8293L14.5042 14.4078C13.8564 14.7633 12.9436 14.9672 12 14.9672C11.0564 14.9672 10.1436 14.7633 9.49567 14.4078L9.26451 14.8293Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.7181 13.6378C20.7181 15.4737 19.8396 17.2037 18.2423 18.5178H5.75758C4.16039 17.2037 3.28189 15.4737 3.28189 13.6378C3.28189 9.78144 7.19284 6.64409 12 6.64409C16.8072 6.64409 20.7181 9.78144 20.7181 13.6378ZM5.55602 15.0327V11.8956C5.55602 10.6518 6.56793 9.63994 7.81181 9.63994H16.188C17.4318 9.63994 18.4437 10.6518 18.4437 11.8956V15.0327C18.4437 16.2765 17.4318 17.2884 16.188 17.2884H7.81181C6.56793 17.2884 5.55602 16.2765 5.55602 15.0327Z"
              fill="#333333"
            />
            <Path
              d="M3.79524 6.3132C3.47362 6.34042 3.15963 6.24186 2.91216 6.0337C2.6647 5.82578 2.5131 5.53385 2.48529 5.21165C2.45737 4.88967 2.55663 4.57615 2.76467 4.3288C3.00368 4.04438 3.34654 3.89794 3.69186 3.89794C3.9669 3.89794 4.24335 3.99088 4.46981 4.18143C4.71715 4.38935 4.86875 4.68128 4.89656 5.00326C4.92449 5.32523 4.82522 5.63898 4.61718 5.88633C4.40914 6.13368 4.11721 6.28527 3.79524 6.3132Z"
              fill="#333333"
            />
            <Path
              d="M21.0878 6.0337C20.8405 6.24186 20.5278 6.34113 20.2048 6.3132C19.8828 6.28527 19.5909 6.13368 19.3828 5.88633C19.1748 5.63898 19.0755 5.32523 19.1033 5.00326C19.1312 4.68128 19.2827 4.38935 19.5302 4.18143C19.7567 3.99088 20.0331 3.89794 20.3081 3.89794C20.6533 3.89794 20.9963 4.04462 21.2354 4.3288C21.4434 4.57615 21.5426 4.88967 21.5147 5.21165C21.4869 5.53385 21.3353 5.82578 21.0878 6.0337Z"
              fill="#333333"
            />
            <Path
              d="M5.55602 11.8956V15.0327C5.55602 16.2765 6.56793 17.2884 7.81181 17.2884H16.188C17.4318 17.2884 18.4437 16.2765 18.4437 15.0327V11.8956C18.4437 10.6518 17.4318 9.63994 16.188 9.63994H7.81181C6.56793 9.63994 5.55602 10.6518 5.55602 11.8956ZM17.9631 11.8956V15.0327C17.9631 16.0115 17.1668 16.8078 16.188 16.8078H7.81181C6.83299 16.8078 6.03663 16.0115 6.03663 15.0327V11.8956C6.03663 10.9168 6.83299 10.1205 7.81181 10.1205H16.188C17.1668 10.1205 17.9631 10.9168 17.9631 11.8956Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
            <Path
              d="M8.11649 13.4679C8.11649 12.9467 8.54042 12.5227 9.06163 12.5227C9.58284 12.5227 10.0068 12.9467 10.0068 13.4679H10.4874C10.4874 12.6818 9.84779 12.0421 9.06163 12.0421C8.27548 12.0421 7.63588 12.6818 7.63588 13.4679H8.11649Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
            <Path
              d="M14.9383 12.5227C15.4594 12.5227 15.8833 12.9467 15.8833 13.4679H16.364C16.364 12.6818 15.7245 12.0421 14.9383 12.0421C14.1522 12.0421 13.5126 12.6818 13.5126 13.4679H13.9932C13.9932 12.9467 14.4171 12.5227 14.9383 12.5227Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
            <Path
              d="M21.6033 4.01951C21.3125 3.67383 20.9047 3.46192 20.4547 3.4232C20.0051 3.38354 19.5667 3.5227 19.2209 3.81346C18.8752 4.10399 18.6634 4.51185 18.6246 4.96172C18.6088 5.14418 18.6236 5.32424 18.6645 5.4974L16.6488 7.19218C15.2836 6.53959 13.6952 6.16348 12 6.16348C10.3048 6.16348 8.71636 6.53959 7.35115 7.19218L5.33549 5.49746C5.37636 5.32429 5.39121 5.14419 5.37541 4.96172C5.33657 4.51185 5.12478 4.10399 4.77911 3.81346C4.43343 3.5227 3.99483 3.38331 3.54531 3.4232C3.09532 3.46192 2.68746 3.67383 2.39682 4.01951C2.10618 4.36518 1.96749 4.80331 2.00644 5.25318C2.0454 5.70305 2.25719 6.11091 2.60286 6.40167C2.91028 6.66028 3.29104 6.79851 3.68811 6.79851C3.73739 6.79851 3.78691 6.79639 3.83666 6.79193C4.01904 6.77624 4.19387 6.73073 4.35744 6.66072L5.95961 8.00794C4.02635 9.37916 2.80128 11.3938 2.80128 13.6378C2.80128 15.6469 3.76731 17.5318 5.52138 18.9452L5.58744 18.9985H7.34326V20.5834H16.6567V18.9985H18.4124L18.4785 18.9452C20.2327 17.5318 21.1987 15.6469 21.1987 13.6378C21.1987 11.3938 19.9737 9.37916 18.0404 8.00794L19.6426 6.66072C19.8061 6.73073 19.981 6.77624 20.1633 6.79193C20.2131 6.79639 20.2626 6.79851 20.3119 6.79851C20.709 6.79851 21.0897 6.66028 21.3971 6.40167C21.7428 6.11091 21.9546 5.70305 21.9936 5.25318C22.0325 4.80331 21.8938 4.36518 21.6033 4.01951ZM3.79524 6.3132C3.47362 6.34042 3.15963 6.24186 2.91216 6.0337C2.6647 5.82578 2.5131 5.53385 2.48529 5.21165C2.45737 4.88967 2.55663 4.57615 2.76467 4.3288C3.00368 4.04438 3.34654 3.89794 3.69186 3.89794C3.9669 3.89794 4.24335 3.99088 4.46981 4.18143C4.71715 4.38935 4.86875 4.68128 4.89656 5.00326C4.92449 5.32523 4.82522 5.63898 4.61718 5.88633C4.40914 6.13368 4.11721 6.28527 3.79524 6.3132ZM4.78657 6.3935C4.85709 6.33318 4.92422 6.26807 4.98515 6.19563C5.04602 6.1232 5.09863 6.04591 5.14593 5.9661L6.88549 7.42868C6.71082 7.52398 6.5415 7.6251 6.37556 7.72964L4.78657 6.3935ZM16.1761 20.1028H7.82387V18.9985H16.1761V20.1028ZM20.7181 13.6378C20.7181 15.4737 19.8396 17.2037 18.2423 18.5178H5.75758C4.16039 17.2037 3.28189 15.4737 3.28189 13.6378C3.28189 9.78144 7.19284 6.64409 12 6.64409C16.8072 6.64409 20.7181 9.78144 20.7181 13.6378ZM17.6244 7.72964C17.4585 7.6251 17.2892 7.52398 17.1145 7.42868L18.854 5.96608C18.9013 6.04589 18.9539 6.12319 19.0149 6.19563C19.0758 6.26807 19.1429 6.33318 19.2134 6.3935L17.6244 7.72964ZM21.0878 6.0337C20.8405 6.24186 20.5278 6.34113 20.2048 6.3132C19.8828 6.28527 19.5909 6.13368 19.3828 5.88633C19.1748 5.63898 19.0755 5.32523 19.1033 5.00326C19.1312 4.68128 19.2827 4.38935 19.5302 4.18143C19.7567 3.99088 20.0331 3.89794 20.3081 3.89794C20.6533 3.89794 20.9963 4.04462 21.2354 4.3288C21.4434 4.57615 21.5426 4.88967 21.5147 5.21165C21.4869 5.53385 21.3353 5.82578 21.0878 6.0337Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
            <Path
              d="M9.26451 14.8293C9.99165 15.2282 10.9631 15.4479 12 15.4479C13.0369 15.4479 14.0084 15.2282 14.7353 14.8293L14.5042 14.4078C13.8564 14.7633 12.9436 14.9672 12 14.9672C11.0564 14.9672 10.1436 14.7633 9.49567 14.4078L9.26451 14.8293Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.7181 13.6378C20.7181 15.4737 19.8396 17.2037 18.2423 18.5178H5.75758C4.16039 17.2037 3.28189 15.4737 3.28189 13.6378C3.28189 9.78144 7.19284 6.64409 12 6.64409C16.8072 6.64409 20.7181 9.78144 20.7181 13.6378ZM5.55602 15.0327V11.8956C5.55602 10.6518 6.56793 9.63994 7.81181 9.63994H16.188C17.4318 9.63994 18.4437 10.6518 18.4437 11.8956V15.0327C18.4437 16.2765 17.4318 17.2884 16.188 17.2884H7.81181C6.56793 17.2884 5.55602 16.2765 5.55602 15.0327Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
            <Path
              d="M3.79524 6.3132C3.47362 6.34042 3.15963 6.24186 2.91216 6.0337C2.6647 5.82578 2.5131 5.53385 2.48529 5.21165C2.45737 4.88967 2.55663 4.57615 2.76467 4.3288C3.00368 4.04438 3.34654 3.89794 3.69186 3.89794C3.9669 3.89794 4.24335 3.99088 4.46981 4.18143C4.71715 4.38935 4.86875 4.68128 4.89656 5.00326C4.92449 5.32523 4.82522 5.63898 4.61718 5.88633C4.40914 6.13368 4.11721 6.28527 3.79524 6.3132Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
            <Path
              d="M21.0878 6.0337C20.8405 6.24186 20.5278 6.34113 20.2048 6.3132C19.8828 6.28527 19.5909 6.13368 19.3828 5.88633C19.1748 5.63898 19.0755 5.32523 19.1033 5.00326C19.1312 4.68128 19.2827 4.38935 19.5302 4.18143C19.7567 3.99088 20.0331 3.89794 20.3081 3.89794C20.6533 3.89794 20.9963 4.04462 21.2354 4.3288C21.4434 4.57615 21.5426 4.88967 21.5147 5.21165C21.4869 5.53385 21.3353 5.82578 21.0878 6.0337Z"
              stroke="#333333"
              strokeWidth="0.333333"
              mask="url(#path-1-outside-1_115_4140)"
            />
          </Svg>
        }
        text="IA Wine"
      />
      <NavItem
        icon={
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.00965 2C6.73351 2 6.50965 2.22386 6.50965 2.5V6.70002C6.49505 6.70617 6.48015 6.71257 6.46495 6.71923C6.22287 6.82538 5.90218 7.00059 5.58122 7.2794C4.92494 7.84952 4.30859 8.81888 4.30859 10.3884V21.5C4.30859 21.7761 4.53245 22 4.80859 22H11.1456C11.4218 22 11.6456 21.7752 11.6456 21.4991V17.7075C11.8036 17.7246 11.9641 17.7334 12.1266 17.7334C13.1802 17.7334 14.1482 17.3643 14.9075 16.7491L18.837 20.6786C19.0323 20.8739 19.3488 20.8739 19.5441 20.6786C19.7394 20.4834 19.7394 20.1668 19.5441 19.9715L15.6087 16.0361C16.196 15.2858 16.5466 14.3402 16.5466 13.3134C16.5466 10.8724 14.5677 8.89349 12.1266 8.89349C11.8894 8.89349 11.6565 8.91218 11.4294 8.94817C11.1443 8.05676 10.6338 7.47885 10.1534 7.1174C9.88777 6.91749 9.63475 6.78603 9.43965 6.70235V2.5C9.43965 2.22386 9.2158 2 8.93965 2H7.00965ZM10.465 9.21644C10.2476 8.56378 9.87957 8.16282 9.55216 7.91645C9.35068 7.76483 9.16049 7.66909 9.02342 7.61206C8.95515 7.58366 8.90094 7.56523 8.86634 7.55449C8.84908 7.54913 8.83681 7.54572 8.83024 7.54397L8.82543 7.54272L8.43965 7.45477V3H7.50965V7.45657L7.12156 7.54326L7.11365 7.5453C7.10441 7.54776 7.08804 7.55233 7.06555 7.55943C7.02046 7.57366 6.95146 7.59781 6.86653 7.63506C6.6959 7.70987 6.46633 7.83514 6.23703 8.03433C5.79278 8.42025 5.30859 9.11712 5.30859 10.3884V21H10.6456V17.4792C8.93294 16.8702 7.70667 15.2351 7.70667 13.3134C7.70667 11.4601 8.84739 9.87315 10.465 9.21644ZM8.70667 13.3134C8.70667 11.4247 10.2378 9.89349 12.1266 9.89349C14.0154 9.89349 15.5466 11.4247 15.5466 13.3134C15.5466 14.2464 15.1737 15.0913 14.5676 15.7088C13.9465 16.3417 13.0827 16.7334 12.1266 16.7334C10.2378 16.7334 8.70667 15.2022 8.70667 13.3134Z"
              fill="#333333"
            />
          </Svg>
        }
        text="Vinhos"
      />
      <NavItem
        icon={
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.16667 2.5C6.16667 2.22386 6.39052 2 6.66667 2H9.33333C9.60948 2 9.83333 2.22386 9.83333 2.5V7.86957C9.83333 8.4725 9.89036 8.73782 9.97693 8.91483C10.0671 9.09922 10.2112 9.24192 10.5626 9.56853C10.5703 9.57564 10.578 9.58283 10.5858 9.59009C10.978 9.95438 11.5767 10.5106 12 11.292C12.4233 10.5106 13.022 9.95438 13.4142 9.59009C13.422 9.58283 13.4297 9.57564 13.4374 9.56853C13.7888 9.24192 13.9329 9.09922 14.0231 8.91483C14.1096 8.73782 14.1667 8.4725 14.1667 7.86957V2.5C14.1667 2.22386 14.3905 2 14.6667 2H17.3333C17.6095 2 17.8333 2.22386 17.8333 2.5V7.86957C17.8333 8.4725 17.8904 8.73782 17.9769 8.91483C18.0671 9.09922 18.2112 9.24192 18.5626 9.56853L18.5858 9.59009C19.2482 10.2054 20.5 11.3683 20.5 13.2391V20.6739C20.5 21.4383 19.841 22 19.1111 22H12.8889C12.5603 22 12.2462 21.8862 12 21.6913C11.7538 21.8862 11.4397 22 11.1111 22H4.88889C4.15899 22 3.5 21.4383 3.5 20.6739V13.2391C3.5 11.3683 4.75182 10.2054 5.41419 9.59009C5.42201 9.58283 5.42975 9.57564 5.4374 9.56853C5.78884 9.24192 5.93288 9.09922 6.02307 8.91483C6.10964 8.73782 6.16667 8.4725 6.16667 7.86957V2.5ZM7.16667 3V4.85H8.83333V3H7.16667ZM8.83333 5.85H7.16667V7.86957C7.16667 8.50576 7.11258 8.96326 6.92138 9.35419C6.74111 9.72277 6.45665 9.98681 6.15498 10.2668C6.14273 10.2782 6.13045 10.2896 6.11816 10.301C5.44067 10.9307 4.5 11.8277 4.5 13.2391V13.4H11.5V13.2391C11.5 11.8277 10.5593 10.9307 9.88184 10.301C9.86955 10.2896 9.85727 10.2782 9.84502 10.2668C9.54335 9.98681 9.25889 9.72277 9.07862 9.35419C8.88742 8.96326 8.83333 8.50576 8.83333 7.86957V5.85ZM12.5 13.2391V13.4H19.5V13.2391C19.5 11.8277 18.5593 10.9307 17.8818 10.301C17.8695 10.2896 17.8573 10.2782 17.845 10.2668C17.5434 9.98681 17.2589 9.72277 17.0786 9.35419C16.8874 8.96326 16.8333 8.50576 16.8333 7.86957V5.85H15.1667V7.86957C15.1667 8.50576 15.1126 8.96326 14.9214 9.35419C14.7411 9.72277 14.4567 9.98681 14.155 10.2668C14.1427 10.2782 14.1305 10.2896 14.1182 10.301C13.4407 10.9307 12.5 11.8277 12.5 13.2391ZM15.1667 4.85H16.8333V3H15.1667V4.85ZM19.5 14.4H12.5V17.2H19.5V14.4ZM19.5 18.2H12.5V20.6739C12.5 20.8182 12.641 21 12.8889 21H19.1111C19.359 21 19.5 20.8182 19.5 20.6739V18.2ZM11.5 20.6739V18.2H4.5V20.6739C4.5 20.8182 4.64101 21 4.88889 21H11.1111C11.359 21 11.5 20.8182 11.5 20.6739ZM4.5 17.2H11.5V14.4H4.5V17.2Z"
              fill="#333333"
            />
          </Svg>
        }
        text="Meu Clube"
      />
      <NavItem
        icon={
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M19.1711 21.469C17.4851 21.469 15.7972 21.469 14.1111 21.469C11.4439 21.469 8.77842 21.469 6.11119 21.469C5.50133 21.469 4.89326 21.469 4.28341 21.469C4.37309 21.5575 4.46278 21.646 4.55246 21.7345C4.55246 21.0884 4.55246 20.4406 4.55246 19.7945C4.55246 18.2421 4.55246 16.688 4.55246 15.1357C4.55246 13.2647 4.55246 11.3955 4.55246 9.52456C4.55246 7.90672 4.55246 6.28888 4.55246 4.67103C4.55246 4.1347 4.55246 3.59837 4.55246 3.06381C4.55246 2.81777 4.58654 2.54341 4.55246 2.29914C4.55067 2.28852 4.55246 2.27613 4.55246 2.26551C4.46278 2.35401 4.37309 2.44252 4.28341 2.53102C5.96949 2.53102 7.65736 2.53102 9.34344 2.53102C12.0107 2.53102 14.6761 2.53102 17.3434 2.53102C17.9532 2.53102 18.5613 2.53102 19.1711 2.53102C19.0815 2.44252 18.9918 2.35401 18.9021 2.26551C18.9021 2.91159 18.9021 3.55943 18.9021 4.2055C18.9021 5.75785 18.9021 7.31197 18.9021 8.86432C18.9021 10.7353 18.9021 12.6045 18.9021 14.4754C18.9021 16.0933 18.9021 17.7111 18.9021 19.329C18.9021 20.1166 18.8698 20.9132 18.9021 21.7009C18.9021 21.7115 18.9021 21.7239 18.9021 21.7345C18.9021 22.0761 19.4402 22.0761 19.4402 21.7345C19.4402 21.0884 19.4402 20.4406 19.4402 19.7945C19.4402 18.2421 19.4402 16.688 19.4402 15.1357C19.4402 13.2647 19.4402 11.3955 19.4402 9.52456C19.4402 7.90672 19.4402 6.28888 19.4402 4.67103C19.4402 3.88335 19.4725 3.08682 19.4402 2.29914C19.4402 2.28852 19.4402 2.27613 19.4402 2.26551C19.4402 2.12213 19.3164 2 19.1711 2C17.4851 2 15.7972 2 14.1111 2C11.4439 2 8.77842 2 6.11119 2C5.50133 2 4.89326 2 4.28341 2C4.13812 2 4.01435 2.12213 4.01435 2.26551C4.01435 2.91159 4.01435 3.55943 4.01435 4.2055C4.01435 5.75785 4.01435 7.31197 4.01435 8.86432C4.01435 10.7353 4.01435 12.6045 4.01435 14.4754C4.01435 16.0933 4.01435 17.7111 4.01435 19.329C4.01435 20.1166 3.98206 20.9132 4.01435 21.7009C4.01435 21.7115 4.01435 21.7239 4.01435 21.7345C4.01435 21.8779 4.13812 22 4.28341 22C5.96949 22 7.65736 22 9.34344 22C12.0107 22 14.6761 22 17.3434 22C17.9532 22 18.5613 22 19.1711 22C19.5173 22 19.5191 21.469 19.1711 21.469Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.69432 19.4877C6.69432 19.2668 6.8734 19.0877 7.09432 19.0877H16.7653C16.9862 19.0877 17.1653 19.2668 17.1653 19.4877C17.1653 19.7086 16.9862 19.8877 16.7653 19.8877H7.09432C6.8734 19.8877 6.69432 19.7086 6.69432 19.4877Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.69432 18.0691C6.69432 17.8482 6.8734 17.6691 7.09432 17.6691H16.7653C16.9862 17.6691 17.1653 17.8482 17.1653 18.0691C17.1653 18.29 16.9862 18.4691 16.7653 18.4691H7.09432C6.8734 18.4691 6.69432 18.29 6.69432 18.0691Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3467 15.9408V11.5084H12.1467V15.9408H11.3467Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.86913 15.9408C9.86913 15.7199 10.0482 15.5408 10.2691 15.5408H13.2241C13.445 15.5408 13.6241 15.7199 13.6241 15.9408C13.6241 16.1617 13.445 16.3408 13.2241 16.3408H10.2691C10.0482 16.3408 9.86913 16.1617 9.86913 15.9408Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.64145 4.56077C8.66795 4.36205 8.83746 4.21364 9.03794 4.21364H14.4553C14.6558 4.21364 14.8253 4.36205 14.8518 4.56077L15.3443 8.25442C15.3466 8.27195 15.3478 8.28961 15.3478 8.30729C15.3478 10.2962 13.7356 11.9085 11.7466 11.9085C9.75768 11.9085 8.14545 10.2962 8.14545 8.30729C8.14545 8.28961 8.14663 8.27195 8.14896 8.25442L8.64145 4.56077ZM9.38815 5.01364L8.94557 8.33297C8.95936 9.86826 10.2081 11.1085 11.7466 11.1085C13.2852 11.1085 14.5339 9.86826 14.5477 8.33297L14.1051 5.01364H9.38815Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8031 7.96856H8.64404V7.16856H14.8031V7.96856Z"
              fill="#333333"
            />
          </Svg>
        }
        text="Conteúdo"
      />
      <NavItem
        icon={
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 8C2 7.58579 2.33579 7.25 2.75 7.25H21.25C21.6642 7.25 22 7.58579 22 8C22 8.41421 21.6642 8.75 21.25 8.75H2.75C2.33579 8.75 2 8.41421 2 8Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12C2 11.5858 2.33579 11.25 2.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12Z"
              fill="#333333"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 16C2 15.5858 2.33579 15.25 2.75 15.25H21.25C21.6642 15.25 22 15.5858 22 16C22 16.4142 21.6642 16.75 21.25 16.75H2.75C2.33579 16.75 2 16.4142 2 16Z"
              fill="#333333"
            />
          </Svg>
        }
        text="Conta"
      />
    </View>
  );
};

export default Navigation;