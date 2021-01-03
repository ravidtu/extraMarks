import http from "../http-common";

class UploadFilesService {
  upload(file) {
    let formData = new FormData();

    formData.append("images", file);

    return http.post("/api/files/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getFiles() {
    return http.get("/api/files/upload/");
  }
}

export default new UploadFilesService(); 