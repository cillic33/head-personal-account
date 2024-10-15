export interface IWidget {
  id: string;
  title: string;
  $isOpen?: boolean;
  $isDragIcon?: boolean;
  $externalLink?: string;
  $internalLink?: string;
  $popupId?: string;
}
