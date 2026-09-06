"use server";

export type InquiryState = {
  status: "idle" | "error" | "success";
  message: string;
};

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();

  if (!name || !organization || !topic) {
    return {
      status: "error",
      message: "Ad soyad, kurum ve konu alanları gerekli.",
    };
  }

  if (name.length > 120 || organization.length > 160 || topic.length > 2000) {
    return {
      status: "error",
      message: "Alan uzunluklarını kontrol edip yeniden gönderin.",
    };
  }

  // TODO: Connect to email, CRM, or form backend.
  // Until then this action validates input and acknowledges receipt.
  console.info("[UNIQ inquiry]", { name, organization, topic });

  return {
    status: "success",
    message:
      "Mesajınız alındı. En kısa sürede dönüş yapacağız. Acil ise +90 212 262 69 42’yi arayabilirsiniz.",
  };
}
