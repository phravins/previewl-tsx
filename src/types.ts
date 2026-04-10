export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: any;
}

export interface Conversion {
  id: string;
  userId: string;
  sourceFormat: string;
  targetFormat: string;
  inputCode: string;
  outputCode: string;
  status: 'success' | 'failed';
  errorMessage?: string;
  createdAt: any;
}

export interface FileItem {
  name: string;
  type: 'tsx' | 'css' | 'ts' | 'js';
  content: string;
}
