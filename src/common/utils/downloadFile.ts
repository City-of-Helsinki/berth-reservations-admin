/**
 * A browser hack to download a file instead of just a byte string.
 */
export const downloadFile = async (data: string, filename: string) => {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    resolve(null);
  });
};
