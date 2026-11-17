// Executive Dashboard Authentication Management

export const ADMIN_USERNAME = "parthu";
export const ADMIN_PASSWORD = "parthu@5746";

const AUTH_STORAGE_KEY = "parthu_admin_auth_v1";
const AUTH_COOKIE_NAME = "parthu_admin_session";

export interface AdminUser {
  username: string;
  name: string;
  role: string;
  loginTime: string;
}

export function login(username: string, pass: string): { success: boolean; error?: string } {
  const cleanUser = username.trim().toLowerCase();
  const cleanPass = pass.trim();

  if (!cleanUser || !cleanPass) {
    return { success: false, error: "Please enter both username and password." };
  }

  if (cleanUser === ADMIN_USERNAME && cleanPass === ADMIN_PASSWORD) {
    const userSession: AdminUser = {
      username: ADMIN_USERNAME,
      name: "Parthu Administrator",
      role: "Super Admin",
      loginTime: new Date().toISOString()
    };

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userSession));
        // Also set client cookie for 30 days
        document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(userSession))}; path=/; max-age=2592000; SameSite=Lax`;
        window.dispatchEvent(new Event("parthu_auth_state_changed"));
      } catch (err) {
        console.warn("Storage access restricted:", err);
      }
    }

    return { success: true };
  }

  return { success: false, error: "Invalid username or password. Please verify your credentials." };
}

export function logout(): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
      window.dispatchEvent(new Event("parthu_auth_state_changed"));
    } catch (err) {
      console.warn("Storage access restricted:", err);
    }
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed?.username === ADMIN_USERNAME) {
        return true;
      }
    }

    // Fallback to cookie check
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === AUTH_COOKIE_NAME && value) {
        const decoded = JSON.parse(decodeURIComponent(value));
        if (decoded?.username === ADMIN_USERNAME) {
          return true;
        }
      }
    }
  } catch (err) {
    console.error("Auth check error:", err);
  }

  return false;
}

export function getAuthUser(): AdminUser | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore error
  }
  return null;
}
