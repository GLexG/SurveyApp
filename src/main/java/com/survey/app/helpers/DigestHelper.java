package com.survey.app.helpers;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Project: survay_app
 * Created by Vojin on 7/31/2016.
 */
public class DigestHelper {

    public static String md5HexString(String raw) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(raw.getBytes());
        byte[] digest = md.digest();
        StringBuilder sb = new StringBuilder();
        for (byte b : digest) {
            sb.append(String.format("%02x", b & 0xff));
        }

        return sb.toString();
    }

}
