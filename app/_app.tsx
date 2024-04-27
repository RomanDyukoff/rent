import React from "react";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J4QYFRDQTT" />
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-J4QYFRDQTT');`}
            </Script>

            <Script type="text/javascript">
                {`(function(m, e, t, r, i, k, a) {
                    m[i] = m[i] || function() {
                        (m[i].a = m[i].a || []).push(arguments);
                    };
                    m[i].l = 1 * new Date();
                    for (var j = 0; j < document.scripts.length; j++) {
                        if (document.scripts[j].src === r) {
                            return;
                        }
                    }
                    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
                })
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(96257538, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });`}
            </Script>
            <noscript>
                <div>
                    <img
                        src="https://mc.yandex.ru/watch/95511551"
                        style={{ position: "absolute", left: "-9999px" }}
                        alt=""
                    />
                </div>
            </noscript>
            <Component {...pageProps} />
        </>
    );
}
