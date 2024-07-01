"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { LuUserSquare2 } from "react-icons/lu";

type Props = {};
const inetersts = [
  "Beyin Tümörleri",
  "Omurilik Tümörleri",
  "Beyin Kanamaları",
  "Omurilik Yaralanmaları",
  "Sinir Sıkışmaları",
  "Hidrosefali (Beyin Sıvısı Toplanması)",
  "Skolyoz ve Omurga Eğrilikleri",
  "Beyin Anevrizmaları",
  "Spina Bifida (Açık Omurga)",
  "Periferik Sinir Cerrahisi",
];
export default function DoctorAbout({}: Props) {
  return (
    <Card className="mt-4 p-4">
      <div>
        <div className="flex items-center space-x-2">
          <div>
            <LuUserSquare2 className="text-4xl text-blue-500" />
          </div>
          <span className="text-lg">
            Prof. Dr. Sezer Bölük - Beyin ve Sinir Cerrahisi Uzmanı
          </span>
        </div>

        <div className="mt-2">
          <p className="text-sm text-zinc-700">
            Prof. Dr. Sezer Bölük, beyin ve sinir cerrahisi alanında tanınmış ve
            saygın bir uzmandır. Tıp eğitimini başarıyla tamamladıktan sonra,
            beyin ve sinir cerrahisi üzerine yoğunlaşarak bu alanda birçok
            önemli çalışmaya imza atmıştır. Kariyeri boyunca, nörolojik
            cerrahinin en karmaşık ve zorlu vakalarını başarıyla yönetmiş ve
            hastalarına umut olmuştur. Prof. Dr. Bölük, özellikle beyin
            tümörleri, omurilik yaralanmaları, epilepsi cerrahisi ve
            nörovasküler hastalıklar konularında derin bilgi ve deneyime
            sahiptir. Çalışmalarında modern tıp teknolojilerini ve yenilikçi
            cerrahi teknikleri ustalıkla kullanarak, hastalarına en iyi tedavi
            seçeneklerini sunmayı amaçlar. Bunun yanı sıra, akademik alanda da
            aktif rol alarak, bilimsel makaleler yayınlamakta ve genç hekimlere
            eğitim vermektedir. Prof. Dr. Sezer Bölük, tıp dünyasında sadece bir
            cerrah olarak değil, aynı zamanda insan hayatına olan derin saygısı
            ve etik değerlere bağlılığıyla da tanınmaktadır. Hastalarıyla
            kurduğu güçlü iletişim ve onların iyileşme süreçlerine gösterdiği
            özen, onu meslektaşlarından ayıran önemli özelliklerdendir. Beyin ve
            sinir cerrahisi gibi hayati bir alanda, Prof. Dr. Sezer Bölük'ün
            liderliği ve uzmanlığı, sayısız hastanın yaşam kalitesini artırmakta
            ve onlara yeni bir umut kapısı açmaktadır.
          </p>
        </div>
      </div>
    </Card>
  );
}
