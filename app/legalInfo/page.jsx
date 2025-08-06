"use client";
import React, { useContext } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import styles from "./legal.css";

const LegalInfo = () => {
  const { store } = useContext(Context);
  const lang = store.lang;
  const isArabic = lang === "ar";

  return (
    <div
      className="legal-page"
      style={{
        direction: isArabic ? "rtl" : "ltr",
        textAlign: isArabic ? "right" : "left",
      }}
    >
      <p className="page-title">
        {isArabic
          ? "معلومات قانونية وسياسات الاستخدام"
          : "Legal & Policy Information"}
      </p>

      <div className="legal-section">
        <p className="section-title">
          {isArabic ? "اسم النشاط التجاري" : "Business Name"}
        </p>
        <p>Recipes for Rafah</p>
      </div>

      <div className="legal-section">
        <p className="section-title">
          {isArabic ? "وصف المنتج / الخدمة" : "Description of Product"}
        </p>
        <p>
          {isArabic
            ? "نحن نوفر وصولاً رقمياً إلى مجموعة من الوصفات التقليدية بعنوان 'وصفات لرفح' كتبتها فاطمة من غزة."
            : "We provide digital access to a collection of traditional recipes titled 'Recipes for Rafah,' written by Fatima from Gaza."}
        </p>
      </div>

      <div className="legal-section">
        <p className="section-title">
          {isArabic ? "خدمة العملاء" : "Customer Service Contact"}
        </p>
        <p>
          {isArabic
            ? "لأي استفسار أو دعم، يرجى زيارة صفحة"
            : "If you need assistance, please reach out through our"}{" "}
          <Link href="/contact" className="contact-link">
            {isArabic ? "الاتصال" : "Contact"}
          </Link>
          .
        </p>
      </div>

      <div className="legal-section">
        <p className="section-title">
          {isArabic ? "سياسة الاسترداد" : "Return & Refund Policy"}
        </p>
        <p>
          {isArabic
            ? "نحن نقدم استردادًا لأي عميل غير راضٍ خلال 14 يومًا من تاريخ الشراء."
            : "We offer full refunds to any customer who is unsatisfied, up to 14 days after the date of purchase."}
        </p>
      </div>

      <div className="legal-section">
        <p className="section-title">
          {isArabic ? "سياسة الإلغاء" : "Cancellation Policy"}
        </p>
        <p>
          {isArabic
            ? "لا يمكن إلغاء الطلبات بعد إتمام الشراء. إذا كنت بحاجة إلى المساعدة، يرجى التواصل معنا."
            : "Orders cannot be canceled after purchase. If needed, you may request a refund using our contact form."}
        </p>
      </div>

      <div className="legal-section">
        <p className="section-title">
          {isArabic
            ? "القيود القانونية / التصدير"
            : "Legal / Export Restrictions"}
        </p>
        <p>
          {isArabic
            ? "جميع منتجاتنا رقمية ولا تتطلب شحنًا. لا توجد قيود قانونية أو تصديرية معروفة حالياً."
            : "All products are digital and do not require shipping. There are no known legal or export restrictions at this time."}
        </p>
      </div>

      <div className="legal-section">
        <p className="section-title">
          {isArabic ? "شروط العروض الترويجية" : "Promotional Terms"}
        </p>
        <p>
          {isArabic
            ? "العروض الترويجية صالحة لفترة محدودة وقد تتغير دون إشعار مسبق."
            : "Promotional offers are valid for a limited time and may change without prior notice."}
        </p>
      </div>
    </div>
  );
};

export default LegalInfo;
