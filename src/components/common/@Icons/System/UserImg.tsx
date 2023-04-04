import { Icon, IconProps } from '@chakra-ui/react';

const UserImg = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" color="#B8BCC8" {...props}>
      <path
        d="M24 11.988C24 5.37 18.624 0 12 0C5.376 0 0 5.37 0 11.988C0 15.633 1.656 18.918 4.248 21.123C4.272 21.147 4.296 21.147 4.296 21.171C4.512 21.339 4.728 21.507 4.968 21.675C5.088 21.747 5.184 21.8415 5.304 21.9375C7.2871 23.282 9.62807 24.0005 12.024 24C14.4199 24.0005 16.7609 23.282 18.744 21.9375C18.864 21.8655 18.96 21.771 19.08 21.6975C19.296 21.531 19.536 21.363 19.752 21.195C19.776 21.171 19.8 21.171 19.8 21.147C22.344 18.9165 24 15.633 24 11.988ZM12 22.4895C9.744 22.4895 7.68 21.7695 5.976 20.571C6 20.379 6.048 20.1885 6.096 19.9965C6.23901 19.4762 6.44875 18.9765 6.72 18.51C6.984 18.054 7.296 17.646 7.68 17.286C8.04 16.926 8.472 16.5915 8.904 16.3275C9.36 16.0635 9.84 15.8715 10.368 15.7275C10.9001 15.5841 11.4489 15.5119 12 15.513C13.636 15.5014 15.2118 16.129 16.392 17.262C16.944 17.814 17.376 18.462 17.688 19.2045C17.856 19.6365 17.976 20.0925 18.048 20.571C16.2768 21.8162 14.1652 22.4861 12 22.4895ZM8.328 11.3895C8.11653 10.9053 8.01019 10.3818 8.016 9.8535C8.016 9.327 8.112 8.799 8.328 8.319C8.544 7.839 8.832 7.4085 9.192 7.0485C9.552 6.6885 9.984 6.402 10.464 6.186C10.944 5.97 11.472 5.874 12 5.874C12.552 5.874 13.056 5.97 13.536 6.186C14.016 6.402 14.448 6.69 14.808 7.0485C15.168 7.4085 15.456 7.8405 15.672 8.319C15.888 8.799 15.984 9.327 15.984 9.8535C15.984 10.4055 15.888 10.9095 15.672 11.388C15.4635 11.8609 15.1708 12.2919 14.808 12.66C14.4398 13.0222 14.0088 13.3145 13.536 13.5225C12.5442 13.9301 11.4318 13.9301 10.44 13.5225C9.96722 13.3145 9.53621 13.0222 9.168 12.66C8.80472 12.2973 8.51894 11.8645 8.328 11.388V11.3895ZM19.464 19.3485C19.464 19.3005 19.44 19.2765 19.44 19.2285C19.204 18.4776 18.856 17.7666 18.408 17.1195C17.9595 16.4676 17.4084 15.8926 16.776 15.417C16.293 15.0537 15.7695 14.7476 15.216 14.505C15.4678 14.3389 15.7011 14.1463 15.912 13.9305C16.2698 13.5773 16.584 13.1824 16.848 12.7545C17.3795 11.8812 17.654 10.8757 17.64 9.8535C17.6474 9.09677 17.5004 8.34648 17.208 7.6485C16.9193 6.97596 16.5037 6.36533 15.984 5.85C15.4651 5.34005 14.8543 4.93288 14.184 4.65C13.4849 4.35809 12.7336 4.21161 11.976 4.2195C11.2183 4.21209 10.467 4.35908 9.768 4.6515C9.09188 4.93378 8.47966 5.34958 7.968 5.874C7.45806 6.39238 7.05089 7.00263 6.768 7.6725C6.47557 8.37048 6.32858 9.12077 6.336 9.8775C6.336 10.4055 6.408 10.9095 6.552 11.388C6.696 11.892 6.888 12.348 7.152 12.7785C7.392 13.2105 7.728 13.5945 8.088 13.9545C8.304 14.1705 8.544 14.361 8.808 14.529C8.25275 14.7781 7.72908 15.0923 7.248 15.465C6.624 15.945 6.072 16.5195 5.616 17.1435C5.16339 17.7879 4.81512 18.4997 4.584 19.2525C4.56 19.3005 4.56 19.3485 4.56 19.3725C2.664 17.454 1.488 14.865 1.488 11.988C1.488 6.21 6.216 1.4865 12 1.4865C17.784 1.4865 22.512 6.21 22.512 11.988C22.5089 14.7479 21.413 17.3943 19.464 19.3485Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default UserImg;
