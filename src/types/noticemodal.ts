interface NoticeModalProps {
    isOpen: boolean;
    onClose: () => void;
    noticeMessage: string;
    imageUrl?: string;
    pdfUrl?: string;
} 
export default NoticeModalProps;  