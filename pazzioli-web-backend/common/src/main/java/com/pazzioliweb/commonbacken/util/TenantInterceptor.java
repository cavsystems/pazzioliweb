package com.pazzioliweb.commonbacken.util;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.pazzioliweb.commonbacken.conexiondb.TenantContext;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class TenantInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String tenant = request.getHeader("X-TenantID"); // o desde request.getParameter("db")
        System.out.println("teant actual "+request.getHeader("X-TenantID"));
        if (tenant != null && !tenant.isEmpty()) {
            TenantContext.setCurrentTenant(tenant);
        } else {
            TenantContext.clear(); // Limpia si no viene nada
        }
        return true;
    }
}
