import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        headers: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
        payload: "eyJkb21haW4iOiAib25zZW5ib3QtbGlua3F1ZXN0LWVsZG9yaWEtbWhqYXB4eHJmLWZyYW1lY2VwdGlvbi12Mi52ZXJjZWwuYXBwIn0",
        signature: "Drv8Kc7P5s5xpetRTUeJ_DmY1D2XmB6FT89V7kHT2WVtRQQrQnTlCMp1K8CFI9B78sfEMwt80l0eicwvoVl99Bw"
    });
}
